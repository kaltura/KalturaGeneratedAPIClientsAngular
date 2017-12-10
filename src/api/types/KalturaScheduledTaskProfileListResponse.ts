
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduledTaskProfile } from './KalturaScheduledTaskProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaScheduledTaskProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaScheduledTaskProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaScheduledTaskProfile[];

    constructor(data? : KalturaScheduledTaskProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaScheduledTaskProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduledTaskProfile, subType : 'KalturaScheduledTaskProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaScheduledTaskProfileListResponse',KalturaScheduledTaskProfileListResponse);
