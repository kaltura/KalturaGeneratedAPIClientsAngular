
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaBeaconBaseFilter, KalturaBeaconBaseFilterArgs } from './KalturaBeaconBaseFilter';

export interface KalturaBeaconFilterArgs  extends KalturaBeaconBaseFilterArgs {
    indexTypeEqual? : KalturaBeaconIndexType;
}


export class KalturaBeaconFilter extends KalturaBeaconBaseFilter {

    indexTypeEqual : KalturaBeaconIndexType;

    constructor(data? : KalturaBeaconFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconFilter' },
				indexTypeEqual : { type : 'es', subTypeConstructor : KalturaBeaconIndexType, subType : 'KalturaBeaconIndexType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconFilter',KalturaBeaconFilter);
