
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';

export interface KalturaQuickPlayDistributionJobProviderDataArgs  extends KalturaConfigurableDistributionJobProviderDataArgs {
    xml? : string;
	videoFilePaths? : KalturaString[];
	thumbnailFilePaths? : KalturaString[];
}


export class KalturaQuickPlayDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {

    xml : string;
	videoFilePaths : KalturaString[];
	thumbnailFilePaths : KalturaString[];

    constructor(data? : KalturaQuickPlayDistributionJobProviderDataArgs)
    {
        super(data);
        if (typeof this.videoFilePaths === 'undefined') this.videoFilePaths = [];
		if (typeof this.thumbnailFilePaths === 'undefined') this.thumbnailFilePaths = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaQuickPlayDistributionJobProviderData' },
				xml : { type : 's' },
				videoFilePaths : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' },
				thumbnailFilePaths : { type : 'a', subTypeConstructor : KalturaString, subType : 'KalturaString' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaQuickPlayDistributionJobProviderData',KalturaQuickPlayDistributionJobProviderData);
