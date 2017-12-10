
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaFreewheelGenericDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePaths? : KalturaString[];
	thumbAssetFilePath? : string;
	cuePoints? : KalturaCuePoint[];
}


export class KalturaFreewheelGenericDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePaths : KalturaString[];
	thumbAssetFilePath : string;
	cuePoints : KalturaCuePoint[];

    constructor(data? : KalturaFreewheelGenericDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.videoAssetFilePaths === 'undefined') this.videoAssetFilePaths = [];
		if (typeof this.cuePoints === 'undefined') this.cuePoints = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFreewheelGenericDistributionJobProviderData' },
				videoAssetFilePaths : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				thumbAssetFilePath : { type : 's' },
				cuePoints : { type : 'a', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFreewheelGenericDistributionJobProviderData',KalturaFreewheelGenericDistributionJobProviderData);
