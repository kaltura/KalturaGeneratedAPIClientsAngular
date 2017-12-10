
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBatchJob } from './KalturaBatchJob';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaBatchJobListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaBatchJobListResponse extends KalturaListResponse {

    readonly objects : KalturaBatchJob[];

    constructor(data? : KalturaBatchJobListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaBatchJobListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaBatchJob, subType : 'KalturaBatchJob' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchJobListResponse',KalturaBatchJobListResponse);
