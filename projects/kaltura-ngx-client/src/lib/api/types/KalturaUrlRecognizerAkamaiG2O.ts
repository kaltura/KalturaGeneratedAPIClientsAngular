
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaUrlRecognizer, KalturaUrlRecognizerArgs } from './KalturaUrlRecognizer';

export interface KalturaUrlRecognizerAkamaiG2OArgs  extends KalturaUrlRecognizerArgs {
    headerData? : string;
	headerSign? : string;
	timeout? : number;
	salt? : string;
}


export class KalturaUrlRecognizerAkamaiG2O extends KalturaUrlRecognizer {

    headerData : string;
	headerSign : string;
	timeout : number;
	salt : string;

    constructor(data? : KalturaUrlRecognizerAkamaiG2OArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaUrlRecognizerAkamaiG2O' },
				headerData : { type : 's' },
				headerSign : { type : 's' },
				timeout : { type : 'n' },
				salt : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaUrlRecognizerAkamaiG2O'] = KalturaUrlRecognizerAkamaiG2O;