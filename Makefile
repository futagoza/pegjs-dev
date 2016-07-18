all: clean clone update

clone:
	node scripts/clone

count:
	node scripts/count

update:
	node scripts/update

clean:
	node scripts/clean

.PHONY:  all clone count update clean
.SILENT: all clone count update clean
