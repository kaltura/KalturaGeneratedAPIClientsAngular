
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFtpDistributionFile } from './KalturaFtpDistributionFile';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaFtpDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    filesForDistribution? : KalturaFtpDistributionFile[];
}


export class KalturaFtpDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    filesForDistribution : KalturaFtpDistributionFile[];

    constructor(data? : KalturaFtpDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.filesForDistribution === 'undefined') this.filesForDistribution = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFtpDistributionJobProviderData' },
				filesForDistribution : { type : 'a', subTypeConstructor : KalturaFtpDistributionFile, subType : 'KalturaFtpDistributionFile' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFtpDistributionJobProviderData',KalturaFtpDistributionJobProviderData);
