
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataProfile } from './KalturaMetadataProfile';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMetadataProfileListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMetadataProfileListResponse extends KalturaListResponse {

    readonly objects : KalturaMetadataProfile[];

    constructor(data? : KalturaMetadataProfileListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMetadataProfileListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMetadataProfile, subType : 'KalturaMetadataProfile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfileListResponse',KalturaMetadataProfileListResponse);
