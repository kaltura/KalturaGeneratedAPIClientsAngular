
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaMatchMetadataConditionArgs  extends KalturaMatchConditionArgs {
    xPath? : string;
	profileId? : number;
	profileSystemName? : string;
}


export class KalturaMatchMetadataCondition extends KalturaMatchCondition {

    xPath : string;
	profileId : number;
	profileSystemName : string;

    constructor(data? : KalturaMatchMetadataConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMatchMetadataCondition' },
				xPath : { type : 's' },
				profileId : { type : 'n' },
				profileSystemName : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMatchMetadataCondition',KalturaMatchMetadataCondition);
