echo "DEPLOYMENT=$(
    branch_name="${GITHUB_REF##*/}"
    if [[ $branch_name == "main" ]]; then
        echo "PRD"
    else
        IFS='-' read -r prefix _ <<< "$branch_name"  # Split branch name and get the first part before the '-'
        echo "${prefix^^}"  # Convert to uppercase
    fi
)" >> $GITHUB_ENV