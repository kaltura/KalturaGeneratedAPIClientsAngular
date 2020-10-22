
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlRecognizer, KalturaUrlRecognizerArgs } from './KalturaUrlRecognizer';

export interface KalturaUrlRecognizerKalturaArgs  extends KalturaUrlRecognizerArgs {
    key? : string;
}


export class KalturaUrlRecognizerKaltura extends KalturaUrlRecognizer {

    key : string;

    constructor(data? : KalturaUrlRecognizerKalturaArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlRecognizerKaltura' },
				key : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlRecognizerKaltura'] = KalturaUrlRecognizerKaltura;