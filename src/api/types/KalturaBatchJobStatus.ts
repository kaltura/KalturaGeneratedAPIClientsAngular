

export enum KalturaBatchJobStatus {
    aborted=7,
	almostDone=8,
	dontProcess=11,
	failed=6,
	fatal=10,
	finished=5,
	finishedPartially=12,
	movefile=4,
	pending=0,
	processed=3,
	processing=2,
	queued=1,
	retry=9
}