
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDailymotionDistributionCaptionAction } from './KalturaDailymotionDistributionCaptionAction';
import { KalturaDailymotionDistributionCaptionFormat } from './KalturaDailymotionDistributionCaptionFormat';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaDailymotionDistributionCaptionInfoArgs  extends KalturaObjectBaseArgs {
    language? : string;
	filePath? : string;
	remoteId? : string;
	action? : KalturaDailymotionDistributionCaptionAction;
	version? : string;
	assetId? : string;
	format? : KalturaDailymotionDistributionCaptionFormat;
}


export class KalturaDailymotionDistributionCaptionInfo extends KalturaObjectBase {

    language : string;
	filePath : string;
	remoteId : string;
	action : KalturaDailymotionDistributionCaptionAction;
	version : string;
	assetId : string;
	format : KalturaDailymotionDistributionCaptionFormat;

    constructor(data? : KalturaDailymotionDistributionCaptionInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDailymotionDistributionCaptionInfo' },
				language : { type : 's' },
				filePath : { type : 's' },
				remoteId : { type : 's' },
				action : { type : 'en', subTypeConstructor : KalturaDailymotionDistributionCaptionAction, subType : 'KalturaDailymotionDistributionCaptionAction' },
				version : { type : 's' },
				assetId : { type : 's' },
				format : { type : 'en', subTypeConstructor : KalturaDailymotionDistributionCaptionFormat, subType : 'KalturaDailymotionDistributionCaptionFormat' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDailymotionDistributionCaptionInfo',KalturaDailymotionDistributionCaptionInfo);
