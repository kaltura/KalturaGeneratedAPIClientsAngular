
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEventNotificationTemplate } from './KalturaEventNotificationTemplate';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaEventNotificationTemplateListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaEventNotificationTemplateListResponse extends KalturaListResponse {

    readonly objects : KalturaEventNotificationTemplate[];

    constructor(data? : KalturaEventNotificationTemplateListResponseArgs)
    {
        super(data);
        if (typeof this.objects === 'undefined') this.objects = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEventNotificationTemplateListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaEventNotificationTemplate, subType : 'KalturaEventNotificationTemplate' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaEventNotificationTemplateListResponse',KalturaEventNotificationTemplateListResponse);
