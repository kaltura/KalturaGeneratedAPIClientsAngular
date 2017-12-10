
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTask, KalturaObjectTaskArgs } from './KalturaObjectTask';

export interface KalturaConvertEntryFlavorsObjectTaskArgs  extends KalturaObjectTaskArgs {
    flavorParamsIds? : string;
	reconvert? : boolean;
}


export class KalturaConvertEntryFlavorsObjectTask extends KalturaObjectTask {

    flavorParamsIds : string;
	reconvert : boolean;

    constructor(data? : KalturaConvertEntryFlavorsObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertEntryFlavorsObjectTask' },
				flavorParamsIds : { type : 's' },
				reconvert : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvertEntryFlavorsObjectTask',KalturaConvertEntryFlavorsObjectTask);
