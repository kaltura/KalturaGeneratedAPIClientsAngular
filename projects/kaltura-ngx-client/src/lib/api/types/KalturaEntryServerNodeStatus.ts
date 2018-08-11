

export enum KalturaEntryServerNodeStatus {
    authenticated=3,
	broadcasting=2,
	error=-1,
	markedForDeletion=4,
	playable=1,
	stopped=0,
	taskFinished=9,
	taskPending=5,
	taskProcessing=7,
	taskQueued=6,
	taskUploading=8
}