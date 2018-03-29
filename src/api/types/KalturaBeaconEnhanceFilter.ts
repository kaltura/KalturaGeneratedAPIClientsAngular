
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaBeaconIndexType } from './KalturaBeaconIndexType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';

export interface KalturaBeaconEnhanceFilterArgs  extends KalturaFilterArgs {
    externalElasticQueryObject? : string;
	indexTypeEqual? : KalturaBeaconIndexType;
}


export class KalturaBeaconEnhanceFilter extends KalturaFilter {

    externalElasticQueryObject : string;
	indexTypeEqual : KalturaBeaconIndexType;

    constructor(data? : KalturaBeaconEnhanceFilterArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBeaconEnhanceFilter' },
				externalElasticQueryObject : { type : 's' },
				indexTypeEqual : { type : 'es', subTypeConstructor : KalturaBeaconIndexType, subType : 'KalturaBeaconIndexType' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBeaconEnhanceFilter',KalturaBeaconEnhanceFilter);
