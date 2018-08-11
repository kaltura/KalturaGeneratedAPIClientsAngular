

export enum KalturaEventNotificationTemplateType {
    bpmAbort = 'businessProcessNotification.BusinessProcessAbort',
	bpmSignal = 'businessProcessNotification.BusinessProcessSignal',
	bpmStart = 'businessProcessNotification.BusinessProcessStart',
	email = 'emailNotification.Email',
	http = 'httpNotification.Http',
	push = 'pushNotification.Push'
}