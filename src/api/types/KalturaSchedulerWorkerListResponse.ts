
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaSchedulerWorker } from './KalturaSchedulerWorker';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaSchedulerWorkerListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaSchedulerWorkerListResponse extends KalturaListResponse {

    readonly objects : KalturaSchedulerWorker[];

    constructor(data? : KalturaSchedulerWorkerListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaSchedulerWorkerListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaSchedulerWorker, subType : 'KalturaSchedulerWorker' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaSchedulerWorkerListResponse',KalturaSchedulerWorkerListResponse);
