
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaFtpDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    protocol? : KalturaDistributionProtocol;
	host? : string;
	port? : number;
	basePath? : string;
	username? : string;
	password? : string;
	passphrase? : string;
	sftpPublicKey? : string;
	sftpPrivateKey? : string;
	disableMetadata? : boolean;
	metadataXslt? : string;
	metadataFilenameXslt? : string;
	flavorAssetFilenameXslt? : string;
	thumbnailAssetFilenameXslt? : string;
	assetFilenameXslt? : string;
	asperaPublicKey? : string;
	asperaPrivateKey? : string;
	sendMetadataAfterAssets? : boolean;
}


export class KalturaFtpDistributionProfile extends KalturaConfigurableDistributionProfile {

    protocol : KalturaDistributionProtocol;
	host : string;
	port : number;
	basePath : string;
	username : string;
	password : string;
	passphrase : string;
	sftpPublicKey : string;
	sftpPrivateKey : string;
	disableMetadata : boolean;
	metadataXslt : string;
	metadataFilenameXslt : string;
	flavorAssetFilenameXslt : string;
	thumbnailAssetFilenameXslt : string;
	assetFilenameXslt : string;
	asperaPublicKey : string;
	asperaPrivateKey : string;
	sendMetadataAfterAssets : boolean;

    constructor(data? : KalturaFtpDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionProfile' },
				protocol : { type : 'en', subTypeConstructor : KalturaDistributionProtocol, subType : 'KalturaDistributionProtocol' },
				host : { type : 's' },
				port : { type : 'n' },
				basePath : { type : 's' },
				username : { type : 's' },
				password : { type : 's' },
				passphrase : { type : 's' },
				sftpPublicKey : { type : 's' },
				sftpPrivateKey : { type : 's' },
				disableMetadata : { type : 'b' },
				metadataXslt : { type : 's' },
				metadataFilenameXslt : { type : 's' },
				flavorAssetFilenameXslt : { type : 's' },
				thumbnailAssetFilenameXslt : { type : 's' },
				assetFilenameXslt : { type : 's' },
				asperaPublicKey : { type : 's' },
				asperaPrivateKey : { type : 's' },
				sendMetadataAfterAssets : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFtpDistributionProfile',KalturaFtpDistributionProfile);
