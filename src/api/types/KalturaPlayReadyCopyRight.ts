
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaPlayReadyCopyEnablerHolder } from './KalturaPlayReadyCopyEnablerHolder';
import { KalturaPlayReadyRight, KalturaPlayReadyRightArgs } from './KalturaPlayReadyRight';

export interface KalturaPlayReadyCopyRightArgs  extends KalturaPlayReadyRightArgs {
    copyCount? : number;
	copyEnablers? : KalturaPlayReadyCopyEnablerHolder[];
}


export class KalturaPlayReadyCopyRight extends KalturaPlayReadyRight {

    copyCount : number;
	copyEnablers : KalturaPlayReadyCopyEnablerHolder[];

    constructor(data? : KalturaPlayReadyCopyRightArgs)
    {
        super(data);
        if (typeof this.copyEnablers === 'undefined') this.copyEnablers = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaPlayReadyCopyRight' },
				copyCount : { type : 'n' },
				copyEnablers : { type : 'a', subTypeConstructor : KalturaPlayReadyCopyEnablerHolder, subType : 'KalturaPlayReadyCopyEnablerHolder' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaPlayReadyCopyRight',KalturaPlayReadyCopyRight);
