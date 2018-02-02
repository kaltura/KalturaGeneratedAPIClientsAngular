
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaCsvAdditionalFieldInfoArgs  extends KalturaObjectBaseArgs {
    fieldName? : string;
	xpath? : string;
}


export class KalturaCsvAdditionalFieldInfo extends KalturaObjectBase {

    fieldName : string;
	xpath : string;

    constructor(data? : KalturaCsvAdditionalFieldInfoArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCsvAdditionalFieldInfo' },
				fieldName : { type : 's' },
				xpath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCsvAdditionalFieldInfo',KalturaCsvAdditionalFieldInfo);
