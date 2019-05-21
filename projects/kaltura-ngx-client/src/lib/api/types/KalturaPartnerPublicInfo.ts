
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaPartnerPublicInfoArgs  extends KalturaObjectBaseArgs {
    analyticsUrl? : string;
	ottEnvironmentUrl? : string;
}


export class KalturaPartnerPublicInfo extends KalturaObjectBase {

    analyticsUrl : string;
	ottEnvironmentUrl : string;

    constructor(data? : KalturaPartnerPublicInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPartnerPublicInfo' },
				analyticsUrl : { type : 's' },
				ottEnvironmentUrl : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaPartnerPublicInfo'] = KalturaPartnerPublicInfo;