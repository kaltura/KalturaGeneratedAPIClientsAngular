
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaCompareCondition, KalturaCompareConditionArgs } from './KalturaCompareCondition';

export interface KalturaCompareMetadataConditionArgs  extends KalturaCompareConditionArgs {
    xPath? : string;
	profileId? : number;
	profileSystemName? : string;
}


export class KalturaCompareMetadataCondition extends KalturaCompareCondition {

    xPath : string;
	profileId : number;
	profileSystemName : string;

    constructor(data? : KalturaCompareMetadataConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaCompareMetadataCondition' },
				xPath : { type : 's' },
				profileId : { type : 'n' },
				profileSystemName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaCompareMetadataCondition',KalturaCompareMetadataCondition);
