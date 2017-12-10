
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaDrmProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaDrmProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaDrmProfile[];

    constructor(data? : KalturaDrmProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaDrmProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaDrmProfile, subType : 'KalturaDrmProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDrmProfileListResponse',KalturaDrmProfileListResponse);
