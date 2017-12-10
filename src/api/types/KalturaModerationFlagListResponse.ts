
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaModerationFlag } from './KalturaModerationFlag';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaModerationFlagListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaModerationFlagListResponse extends KalturaListResponse {

    readonly objects : KalturaModerationFlag[];

    constructor(data? : KalturaModerationFlagListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaModerationFlagListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaModerationFlag, subType : 'KalturaModerationFlag' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaModerationFlagListResponse',KalturaModerationFlagListResponse);
