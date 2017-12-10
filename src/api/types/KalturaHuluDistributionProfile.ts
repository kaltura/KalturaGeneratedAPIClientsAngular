
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaDistributionProtocol } from './KalturaDistributionProtocol';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaHuluDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    sftpHost? : string;
	sftpLogin? : string;
	sftpPass? : string;
	seriesChannel? : string;
	seriesPrimaryCategory? : string;
	seriesAdditionalCategories? : KalturaString[];
	seasonNumber? : string;
	seasonSynopsis? : string;
	seasonTuneInInformation? : string;
	videoMediaType? : string;
	disableEpisodeNumberCustomValidation? : boolean;
	protocol? : KalturaDistributionProtocol;
	asperaHost? : string;
	asperaLogin? : string;
	asperaPass? : string;
	port? : number;
	passphrase? : string;
	asperaPublicKey? : string;
	asperaPrivateKey? : string;
}


export class KalturaHuluDistributionProfile extends KalturaConfigurableDistributionProfile {

    sftpHost : string;
	sftpLogin : string;
	sftpPass : string;
	seriesChannel : string;
	seriesPrimaryCategory : string;
	seriesAdditionalCategories : KalturaString[];
	seasonNumber : string;
	seasonSynopsis : string;
	seasonTuneInInformation : string;
	videoMediaType : string;
	disableEpisodeNumberCustomValidation : boolean;
	protocol : KalturaDistributionProtocol;
	asperaHost : string;
	asperaLogin : string;
	asperaPass : string;
	port : number;
	passphrase : string;
	asperaPublicKey : string;
	asperaPrivateKey : string;

    constructor(data? : KalturaHuluDistributionProfileArgs)
    {
        super(data);
        if (typeof this.seriesAdditionalCategories === 'undefined') this.seriesAdditionalCategories = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionProfile' },
				sftpHost : { type : 's' },
				sftpLogin : { type : 's' },
				sftpPass : { type : 's' },
				seriesChannel : { type : 's' },
				seriesPrimaryCategory : { type : 's' },
				seriesAdditionalCategories : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				seasonNumber : { type : 's' },
				seasonSynopsis : { type : 's' },
				seasonTuneInInformation : { type : 's' },
				videoMediaType : { type : 's' },
				disableEpisodeNumberCustomValidation : { type : 'b' },
				protocol : { type : 'en', subTypeConstructor : KalturaDistributionProtocol, subType : 'KalturaDistributionProtocol' },
				asperaHost : { type : 's' },
				asperaLogin : { type : 's' },
				asperaPass : { type : 's' },
				port : { type : 'n' },
				passphrase : { type : 's' },
				asperaPublicKey : { type : 's' },
				asperaPrivateKey : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHuluDistributionProfile',KalturaHuluDistributionProfile);
