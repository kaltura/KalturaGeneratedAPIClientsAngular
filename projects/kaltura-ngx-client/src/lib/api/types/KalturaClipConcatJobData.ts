
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaOperationAttributes } from './KalturaOperationAttributes';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaClipConcatJobDataArgs  extends KalturaJobDataArgs {
    partnerId? : number;
	priority? : number;
	operationAttributes? : KalturaOperationAttributes[];
}


export class KalturaClipConcatJobData extends KalturaJobData {

    partnerId : number;
	priority : number;
	operationAttributes : KalturaOperationAttributes[];

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
				operationAttributes : { type : 'a', subTypeConstructor : KalturaOperationAttributes, subType : 'KalturaOperationAttributes' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaClipConcatJobData'] = KalturaClipConcatJobData;