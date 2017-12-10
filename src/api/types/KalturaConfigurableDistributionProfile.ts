
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDistributionFieldConfig } from './KalturaDistributionFieldConfig';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaDistributionProfile, KalturaDistributionProfileArgs } from './KalturaDistributionProfile';

export interface KalturaConfigurableDistributionProfileArgs  extends KalturaDistributionProfileArgs {
    fieldConfigArray? : KalturaDistributionFieldConfig[];
	itemXpathsToExtend? : KalturaExtendingItemMrssParameter[];
	useCategoryEntries? : boolean;
}


export class KalturaConfigurableDistributionProfile extends KalturaDistributionProfile {

    fieldConfigArray : KalturaDistributionFieldConfig[];
	itemXpathsToExtend : KalturaExtendingItemMrssParameter[];
	useCategoryEntries : boolean;

    constructor(data? : KalturaConfigurableDistributionProfileArgs)
    {
        super(data);
        if (typeof this.fieldConfigArray === 'undefined') this.fieldConfigArray = [];
		if (typeof this.itemXpathsToExtend === 'undefined') this.itemXpathsToExtend = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConfigurableDistributionProfile' },
				fieldConfigArray : { type : 'a', subTypeConstructor : KalturaDistributionFieldConfig, subType : 'KalturaDistributionFieldConfig' },
				itemXpathsToExtend : { type : 'a', subTypeConstructor : KalturaExtendingItemMrssParameter, subType : 'KalturaExtendingItemMrssParameter' },
				useCategoryEntries : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConfigurableDistributionProfile',KalturaConfigurableDistributionProfile);
