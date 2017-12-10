
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeatureStatus } from './KalturaFeatureStatus';
import { KalturaListResponse, KalturaListResponseArgs } from './KalturaListResponse';

export interface KalturaFeatureStatusListResponseArgs  extends KalturaListResponseArgs {
    
}


export class KalturaFeatureStatusListResponse extends KalturaListResponse {

    readonly objects : KalturaFeatureStatus[];

    constructor(data? : KalturaFeatureStatusListResponseArgs)
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
                objectType : { type : 'c', default : 'KalturaFeatureStatusListResponse' },
				objects : { type : 'a', readOnly : true, subTypeConstructor : KalturaFeatureStatus, subType : 'KalturaFeatureStatus' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeatureStatusListResponse',KalturaFeatureStatusListResponse);
