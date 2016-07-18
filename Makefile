all: clean clone update publish clean

clone:
	node scripts/clone

count:
	node scripts/count

update:
	node scripts/update

publish:
	node scripts/publish

clean:
	node scripts/clean

.PHONY:  all clone count update publish clean
.SILENT: all clone count update publish clean
