
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaAssetType } from './KalturaAssetType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaAttUverseDistributionFileArgs  extends KalturaObjectBaseArgs {
    remoteFilename? : string;
	localFilePath? : string;
	assetType? : KalturaAssetType;
	assetId? : string;
}


export class KalturaAttUverseDistributionFile extends KalturaObjectBase {

    remoteFilename : string;
	localFilePath : string;
	assetType : KalturaAssetType;
	assetId : string;

    constructor(data? : KalturaAttUverseDistributionFileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaAttUverseDistributionFile' },
				remoteFilename : { type : 's' },
				localFilePath : { type : 's' },
				assetType : { type : 'es', subTypeConstructor : KalturaAssetType, subType : 'KalturaAssetType' },
				assetId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaAttUverseDistributionFile',KalturaAttUverseDistributionFile);
