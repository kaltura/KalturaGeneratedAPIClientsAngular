
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectTaskType } from './KalturaObjectTaskType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaObjectTaskArgs  extends KalturaObjectBaseArgs {
    stopProcessingOnError? : boolean;
}


export class KalturaObjectTask extends KalturaObjectBase {

    readonly type : KalturaObjectTaskType;
	stopProcessingOnError : boolean;

    constructor(data? : KalturaObjectTaskArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaObjectTask' },
				type : { type : 'es', readOnly : true, subTypeConstructor : KalturaObjectTaskType, subType : 'KalturaObjectTaskType' },
				stopProcessingOnError : { type : 'b' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaObjectTask',KalturaObjectTask);
