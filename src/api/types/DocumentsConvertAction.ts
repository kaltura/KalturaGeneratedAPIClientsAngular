
import { KalturaObjectMetadata } from '../kaltura-object-base';


import { KalturaConversionAttribute } from './KalturaConversionAttribute';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';

export interface DocumentsConvertActionArgs  extends KalturaRequestArgs {
    entryId : string;
	conversionProfileId? : number;
	dynamicConversionAttributes? : KalturaConversionAttribute[];
}

/**
 * Build request payload for service 'documents' action 'convert'.
 *
 * Usage: Convert entry
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 * @class
 * @extends KalturaRequest
 */
export class DocumentsConvertAction extends KalturaRequest<number> {

    entryId : string;
	conversionProfileId : number;
	dynamicConversionAttributes : KalturaConversionAttribute[];

    constructor(data : DocumentsConvertActionArgs)
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
                service : { type : 'c', default : 'document_documents' },
				action : { type : 'c', default : 'convert' },
				entryId : { type : 's' },
				conversionProfileId : { type : 'n' },
				dynamicConversionAttributes : { type : 'a', subTypeConstructor : KalturaConversionAttribute, subType : 'KalturaConversionAttribute' }
            }
        );
        return result;
    }
}

