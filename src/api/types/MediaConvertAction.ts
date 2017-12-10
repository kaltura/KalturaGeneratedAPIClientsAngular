
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface MediaConvertActionArgs  extends KalturaRequestArgs {
    entryId : string;
	conversionProfileId? : number;
	dynamicConversionAttributes? : KalturaConversionAttribute[];
}

/**
 * Build request payload for service 'media' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class MediaConvertAction extends KalturaRequest<number> {

    entryId : string;
	conversionProfileId : number;
	dynamicConversionAttributes : KalturaConversionAttribute[];

    constructor(data : MediaConvertActionArgs)
    {
        super(data, {responseType : 'n', responseSubType : '', responseConstructor : null });
        if (typeof this.dynamicConversionAttributes === 'undefined') this.dynamicConversionAttributes = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                service : { type : 'c', default : 'media' },
				action : { type : 'c', default : 'convert' },
				entryId : { type : 's' },
				conversionProfileId : { type : 'n' },
				dynamicConversionAttributes : { type : 'a', subTypeConstructor : KalturaConversionAttribute, subType : 'KalturaConversionAttribute' }
            }
        );
        return result;
    }
}

