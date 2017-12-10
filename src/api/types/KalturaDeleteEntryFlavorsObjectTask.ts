
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaDeleteFlavorsLogicType } from './KalturaDeleteFlavorsLogicType';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaDeleteEntryFlavorsObjectTaskArgs  extends KalturaObjectTaskArgs {
    deleteType? : KalturaDeleteFlavorsLogicType;
	flavorParamsIds? : string;
}


export class KalturaDeleteEntryFlavorsObjectTask extends KalturaObjectTask {

    deleteType : KalturaDeleteFlavorsLogicType;
	flavorParamsIds : string;

    constructor(data? : KalturaDeleteEntryFlavorsObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaDeleteEntryFlavorsObjectTask' },
				deleteType : { type : 'en', subTypeConstructor : KalturaDeleteFlavorsLogicType, subType : 'KalturaDeleteFlavorsLogicType' },
				flavorParamsIds : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaDeleteEntryFlavorsObjectTask',KalturaDeleteEntryFlavorsObjectTask);
