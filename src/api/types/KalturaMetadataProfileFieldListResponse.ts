
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadataProfileField } from './KalturaMetadataProfileField';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMetadataProfileFieldListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMetadataProfileFieldListResponse extends KalturaListResponse {

    readonly objects : KalturaMetadataProfileField[];

    constructor(data? : KalturaMetadataProfileFieldListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMetadataProfileFieldListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMetadataProfileField, subType : 'KalturaMetadataProfileField' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataProfileFieldListResponse',KalturaMetadataProfileFieldListResponse);
