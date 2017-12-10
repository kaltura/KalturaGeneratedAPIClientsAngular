
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCuePoint } from './KalturaCuePoint';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaHuluDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath? : string;
	thumbAssetFilePath? : string;
	cuePoints? : KalturaCuePoint[];
	fileBaseName? : string;
	captionLocalPaths? : KalturaString[];
}


export class KalturaHuluDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    videoAssetFilePath : string;
	thumbAssetFilePath : string;
	cuePoints : KalturaCuePoint[];
	fileBaseName : string;
	captionLocalPaths : KalturaString[];

    constructor(data? : KalturaHuluDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.cuePoints === 'undefined') this.cuePoints = [];
		if (typeof this.captionLocalPaths === 'undefined') this.captionLocalPaths = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaHuluDistributionJobProviderData' },
				videoAssetFilePath : { type : 's' },
				thumbAssetFilePath : { type : 's' },
				cuePoints : { type : 'a', subTypeConstructor : KalturaCuePoint, subType : 'KalturaCuePoint' },
				fileBaseName : { type : 's' },
				captionLocalPaths : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaHuluDistributionJobProviderData',KalturaHuluDistributionJobProviderData);
