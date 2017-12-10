
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaThumbCuePointSubType } from './KalturaThumbCuePointSubType';
import { KalturaCuePoint, KalturaCuePointArgs } from './KalturaCuePoint';

export interface KalturaThumbCuePointArgs  extends KalturaCuePointArgs {
    assetId? : string;
	description? : string;
	title? : string;
	subType? : KalturaThumbCuePointSubType;
}


export class KalturaThumbCuePoint extends KalturaCuePoint {

    assetId : string;
	description : string;
	title : string;
	subType : KalturaThumbCuePointSubType;

    constructor(data? : KalturaThumbCuePointArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaThumbCuePoint' },
				assetId : { type : 's' },
				description : { type : 's' },
				title : { type : 's' },
				subType : { type : 'en', subTypeConstructor : KalturaThumbCuePointSubType, subType : 'KalturaThumbCuePointSubType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaThumbCuePoint',KalturaThumbCuePoint);
