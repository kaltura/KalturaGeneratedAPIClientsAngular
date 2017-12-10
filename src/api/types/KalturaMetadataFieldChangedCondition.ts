
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaMatchCondition, KalturaMatchConditionArgs } from './KalturaMatchCondition';

export interface KalturaMetadataFieldChangedConditionArgs  extends KalturaMatchConditionArgs {
    xPath? : string;
	profileId? : number;
	profileSystemName? : string;
	versionA? : string;
	versionB? : string;
}


export class KalturaMetadataFieldChangedCondition extends KalturaMatchCondition {

    xPath : string;
	profileId : number;
	profileSystemName : string;
	versionA : string;
	versionB : string;

    constructor(data? : KalturaMetadataFieldChangedConditionArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaMetadataFieldChangedCondition' },
				xPath : { type : 's' },
				profileId : { type : 'n' },
				profileSystemName : { type : 's' },
				versionA : { type : 's' },
				versionB : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaMetadataFieldChangedCondition',KalturaMetadataFieldChangedCondition);
