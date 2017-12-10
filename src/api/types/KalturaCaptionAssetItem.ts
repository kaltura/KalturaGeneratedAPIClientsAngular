
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCaptionAsset } from './KalturaCaptionAsset';
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCaptionAssetItemArgs  extends KalturaObjectBaseArgs {
    asset? : KalturaCaptionAsset;
	entry? : KalturaBaseEntry;
	startTime? : number;
	endTime? : number;
	content? : string;
}


export class KalturaCaptionAssetItem extends KalturaObjectBase {

    asset : KalturaCaptionAsset;
	entry : KalturaBaseEntry;
	startTime : number;
	endTime : number;
	content : string;

    constructor(data? : KalturaCaptionAssetItemArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCaptionAssetItem' },
				asset : { type : 'o', subTypeConstructor : KalturaCaptionAsset, subType : 'KalturaCaptionAsset' },
				entry : { type : 'o', subTypeConstructor : KalturaBaseEntry, subType : 'KalturaBaseEntry' },
				startTime : { type : 'n' },
				endTime : { type : 'n' },
				content : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCaptionAssetItem',KalturaCaptionAssetItem);
