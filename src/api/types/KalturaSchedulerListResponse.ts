
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaScheduler } from './KalturaScheduler';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSchedulerListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaSchedulerListResponse extends KalturaListResponse {

    readonly objects : KalturaScheduler[];

    constructor(data? : KalturaSchedulerListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSchedulerListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaScheduler, subType : 'KalturaScheduler' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSchedulerListResponse',KalturaSchedulerListResponse);
