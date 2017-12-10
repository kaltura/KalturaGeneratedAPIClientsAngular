
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMetadata } from './KalturaMetadata';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaMetadataListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaMetadataListResponse extends KalturaListResponse {

    readonly objects : KalturaMetadata[];

    constructor(data? : KalturaMetadataListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaMetadataListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaMetadata, subType : 'KalturaMetadata' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataListResponse',KalturaMetadataListResponse);
