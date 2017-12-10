
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaComcastMrssDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    metadataProfileId? : number;
	feedTitle? : string;
	feedLink? : string;
	feedDescription? : string;
	feedLastBuildDate? : string;
	itemLink? : string;
	cPlatformTvSeries? : KalturaKeyValue[];
	cPlatformTvSeriesField? : string;
	shouldIncludeCuePoints? : boolean;
	shouldIncludeCaptions? : boolean;
	shouldAddThumbExtension? : boolean;
}


export class KalturaComcastMrssDistributionProfile extends KalturaConfigurableDistributionProfile {

    metadataProfileId : number;
	readonly feedUrl : string;
	feedTitle : string;
	feedLink : string;
	feedDescription : string;
	feedLastBuildDate : string;
	itemLink : string;
	cPlatformTvSeries : KalturaKeyValue[];
	cPlatformTvSeriesField : string;
	shouldIncludeCuePoints : boolean;
	shouldIncludeCaptions : boolean;
	shouldAddThumbExtension : boolean;

    constructor(data? : KalturaComcastMrssDistributionProfileArgs)
    {
        super(data);
        if (typeof this.cPlatformTvSeries === 'undefined') this.cPlatformTvSeries = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaComcastMrssDistributionProfile' },
				metadataProfileId : { type : 'n' },
				feedUrl : { type : 's', readOnly : true },
				feedTitle : { type : 's' },
				feedLink : { type : 's' },
				feedDescription : { type : 's' },
				feedLastBuildDate : { type : 's' },
				itemLink : { type : 's' },
				cPlatformTvSeries : { type : 'a', subTypeConstructor : KalturaKeyValue, subType : 'KalturaKeyValue' },
				cPlatformTvSeriesField : { type : 's' },
				shouldIncludeCuePoints : { type : 'b' },
				shouldIncludeCaptions : { type : 'b' },
				shouldAddThumbExtension : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaComcastMrssDistributionProfile',KalturaComcastMrssDistributionProfile);
