
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDistributionRemoteMediaFileArgs  extends KalturaObjectBaseArgs {
    version? : string;
	assetId? : string;
	remoteId? : string;
}


export class KalturaDistributionRemoteMediaFile extends KalturaObjectBase {

    version : string;
	assetId : string;
	remoteId : string;

    constructor(data? : KalturaDistributionRemoteMediaFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionRemoteMediaFile' },
				version : { type : 's' },
				assetId : { type : 's' },
				remoteId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionRemoteMediaFile',KalturaDistributionRemoteMediaFile);
