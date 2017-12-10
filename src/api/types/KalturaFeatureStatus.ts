
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaFeatureStatusType } from './KalturaFeatureStatusType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaFeatureStatusArgs  extends KalturaObjectBaseArgs {
    type? : KalturaFeatureStatusType;
	value? : number;
}


export class KalturaFeatureStatus extends KalturaObjectBase {

    type : KalturaFeatureStatusType;
	value : number;

    constructor(data? : KalturaFeatureStatusArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaFeatureStatus' },
				type : { type : 'en', subTypeConstructor : KalturaFeatureStatusType, subType : 'KalturaFeatureStatusType' },
				value : { type : 'n' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaFeatureStatus',KalturaFeatureStatus);
