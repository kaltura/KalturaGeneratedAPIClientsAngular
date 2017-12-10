
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaYouTubeDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	captionAssetIds? : string;
	sftpDirectory? : string;
	sftpMetadataFilename? : string;
	currentPlaylists? : string;
	newPlaylists? : string;
	submitXml? : string;
	updateXml? : string;
	deleteXml? : string;
	googleClientId? : string;
	googleClientSecret? : string;
	googleTokenData? : string;
}


export class KalturaYouTubeDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	captionAssetIds : string;
	sftpDirectory : string;
	sftpMetadataFilename : string;
	currentPlaylists : string;
	newPlaylists : string;
	submitXml : string;
	updateXml : string;
	deleteXml : string;
	googleClientId : string;
	googleClientSecret : string;
	googleTokenData : string;

    constructor(data? : KalturaYouTubeDistributionJobProviderDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaYouTubeDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				captionAssetIds : { type : 's' },
				sftpDirectory : { type : 's' },
				sftpMetadataFilename : { type : 's' },
				currentPlaylists : { type : 's' },
				newPlaylists : { type : 's' },
				submitXml : { type : 's' },
				updateXml : { type : 's' },
				deleteXml : { type : 's' },
				googleClientId : { type : 's' },
				googleClientSecret : { type : 's' },
				googleTokenData : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaYouTubeDistributionJobProviderData',KalturaYouTubeDistributionJobProviderData);
