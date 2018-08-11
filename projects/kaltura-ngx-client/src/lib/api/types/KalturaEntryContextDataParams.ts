
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlScope, KalturaAccessControlScopeArgs } from './KalturaAccessControlScope';

export interface KalturaEntryContextDataParamsArgs  extends KalturaAccessControlScopeArgs {
    flavorAssetId? : string;
	flavorTags? : string;
	streamerType? : string;
	mediaProtocol? : string;
}


export class KalturaEntryContextDataParams extends KalturaAccessControlScope {

    flavorAssetId : string;
	flavorTags : string;
	streamerType : string;
	mediaProtocol : string;

    constructor(data? : KalturaEntryContextDataParamsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaEntryContextDataParams' },
				flavorAssetId : { type : 's' },
				flavorTags : { type : 's' },
				streamerType : { type : 's' },
				mediaProtocol : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaEntryContextDataParams'] = KalturaEntryContextDataParams;