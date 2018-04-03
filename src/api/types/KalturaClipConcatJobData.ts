
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObject } from './KalturaObject';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaClipConcatJobDataArgs  extends KalturaJobDataArgs {
    partnerId? : number;
	priority? : number;
	operationAttributes? : KalturaObject[];
}


export class KalturaClipConcatJobData extends KalturaJobData {

    partnerId : number;
	priority : number;
	operationAttributes : KalturaObject[];

    constructor(data? : KalturaClipConcatJobDataArgs)
    {
        super(data);
        if (typeof this.operationAttributes === 'undefined') this.operationAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaClipConcatJobData' },
				partnerId : { type : 'n' },
				priority : { type : 'n' },
				operationAttributes : { type : 'a', subTypeConstructor : KalturaObject, subType : 'KalturaObject' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaClipConcatJobData',KalturaClipConcatJobData);
