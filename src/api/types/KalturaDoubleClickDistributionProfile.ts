
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConfigurableDistributionProfile, KalturaConfigurableDistributionProfileArgs } from './KalturaConfigurableDistributionProfile';

export interface KalturaDoubleClickDistributionProfileArgs  extends KalturaConfigurableDistributionProfileArgs {
    channelTitle? : string;
	channelLink? : string;
	channelDescription? : string;
	cuePointsProvider? : string;
	itemsPerPage? : string;
	ignoreSchedulingInFeed? : boolean;
}


export class KalturaDoubleClickDistributionProfile extends KalturaConfigurableDistributionProfile {

    channelTitle : string;
	channelLink : string;
	channelDescription : string;
	readonly feedUrl : string;
	cuePointsProvider : string;
	itemsPerPage : string;
	ignoreSchedulingInFeed : boolean;

    constructor(data? : KalturaDoubleClickDistributionProfileArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDoubleClickDistributionProfile' },
				channelTitle : { type : 's' },
				channelLink : { type : 's' },
				channelDescription : { type : 's' },
				feedUrl : { type : 's', readOnly : true },
				cuePointsProvider : { type : 's' },
				itemsPerPage : { type : 's' },
				ignoreSchedulingInFeed : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDoubleClickDistributionProfile',KalturaDoubleClickDistributionProfile);
