artifacts:	
	# Copy artifacts for deployment
	cp -a .next/standalone/. $(ARTIFACTS_DIR)
	cp -a .next/standalone/.next $(ARTIFACTS_DIR)/.next
	cp run.sh $(ARTIFACTS_DIR)

build-NextFunction: artifacts