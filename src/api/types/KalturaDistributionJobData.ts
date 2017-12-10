
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionJobProviderData } from './KalturaDistributionJobProviderData';
import { KalturaDistributionRemoteMediaFile } from './KalturaDistributionRemoteMediaFile';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaDistributionJobDataArgs  extends KalturaJobDataArgs {
    distributionProfileId? : number;
	distributionProfile? : KalturaDistributionProfile;
	entryDistributionId? : number;
	entryDistribution? : KalturaEntryDistribution;
	remoteId? : string;
	providerType? : KalturaDistributionProviderType;
	providerData? : KalturaDistributionJobProviderData;
	results? : string;
	sentData? : string;
	mediaFiles? : KalturaDistributionRemoteMediaFile[];
}


export class KalturaDistributionJobData extends KalturaJobData {

    distributionProfileId : number;
	distributionProfile : KalturaDistributionProfile;
	entryDistributionId : number;
	entryDistribution : KalturaEntryDistribution;
	remoteId : string;
	providerType : KalturaDistributionProviderType;
	providerData : KalturaDistributionJobProviderData;
	results : string;
	sentData : string;
	mediaFiles : KalturaDistributionRemoteMediaFile[];

    constructor(data? : KalturaDistributionJobDataArgs)
    {
        super(data);
        if (typeof this.mediaFiles === 'undefined') this.mediaFiles = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDistributionJobData' },
				distributionProfileId : { type : 'n' },
				distributionProfile : { type : 'o', subTypeConstructor : KalturaDistributionProfile, subType : 'KalturaDistributionProfile' },
				entryDistributionId : { type : 'n' },
				entryDistribution : { type : 'o', subTypeConstructor : KalturaEntryDistribution, subType : 'KalturaEntryDistribution' },
				remoteId : { type : 's' },
				providerType : { type : 'es', subTypeConstructor : KalturaDistributionProviderType, subType : 'KalturaDistributionProviderType' },
				providerData : { type : 'o', subTypeConstructor : KalturaDistributionJobProviderData, subType : 'KalturaDistributionJobProviderData' },
				results : { type : 's' },
				sentData : { type : 's' },
				mediaFiles : { type : 'a', subTypeConstructor : KalturaDistributionRemoteMediaFile, subType : 'KalturaDistributionRemoteMediaFile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDistributionJobData',KalturaDistributionJobData);
